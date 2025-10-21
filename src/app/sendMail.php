<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'birgit.leitner@yahoo.de';  
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: noreply@mywebsite.com";

            // If running locally, use Maildev (smtp on 1025) and a harmless from address
            $isLocal = ($_SERVER['REMOTE_ADDR'] ?? '') === '127.0.0.1' || ($_SERVER['REMOTE_ADDR'] ?? '') === '::1';
            if ($isLocal) {
                ini_set('SMTP','127.0.0.1');
                ini_set('smtp_port','1025');
                ini_set('sendmail_from','noreply@local.test');
            }

            $sent = mail($recipient, $subject, $message, implode("\r\n", $headers));

            // write log for diagnostics
            $logLine = sprintf(
                "%s | remote:%s | to:%s | from:%s | subject:%s | sent:%s\n",
                date('Y-m-d H:i:s'),
                $_SERVER['REMOTE_ADDR'] ?? 'unknown',
                $recipient,
                $email,
                $subject,
                $sent ? '1' : '0'
            );

            // Try to write to the script directory first, then fallback to the system temp dir.
            $primaryLog = __DIR__ . '/sendmail.log';
            $fallbackLog = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'sendmail.log';

            $written = @file_put_contents($primaryLog, $logLine, FILE_APPEND | LOCK_EX);
            if ($written === false) {
                // Attempt fallback
                $written = @file_put_contents($fallbackLog, $logLine, FILE_APPEND | LOCK_EX);
                if ($written === false) {
                    // Last-ditch fallback to PHP error log
                    error_log("Failed to write sendmail log to {$primaryLog} and {$fallbackLog}. Log: {$logLine}");
                } else {
                    // Inform developer which file was written for diagnostics
                    error_log("sendMail: wrote log to fallback {$fallbackLog}");
                    header('X-Sendmail-Log-Path: ' . $fallbackLog);
                    header('Access-Control-Expose-Headers: X-Sendmail-Log-Path');
                }
            } else {
                header('X-Sendmail-Log-Path: ' . $primaryLog);
                header('Access-Control-Expose-Headers: X-Sendmail-Log-Path');
            }

            if ($sent) {
                http_response_code(200);
                echo 'OK';
            } else {
                http_response_code(500);
                echo 'MAIL_FAILED';
            }
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 
