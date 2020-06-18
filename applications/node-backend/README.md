Setup
# MyWork Email Service

MyWork Email Service helps dispatch emails to clients 

---
## Requirements

For development, you will only need Node.js and RabbitMQ
 
## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install
    
1. #### Start  RabbitMQ
[official RabbitMQ documentation](https://www.rabbitmq.com/documentation.html)

    $ brew update
    $ brew install rabbitmq
    $ brew services start rabbitmq     
    $ brew services stop  rabbitmq   // stop service 
    $ brew services restart rabbitmq  // restart service

3. ####Clone this repository


    $ git clone https://<YOUR_USERNAME>@bitbucket.com/Michael_Owokade/mywork-email-service.git
    $ cd mywork-email-service
    $ npm install
    $ npm run start
    
3. #### Run RabbitMQ consumer


    $ node services/rabbitMQ/consumer.js consumerMessage
    
#### Using Example Implementation 🤧

Path to actual implementation
``app/Repositories/leave/LeaveSchedulerRepository.php``

 `line 83`




Ensure you have added this to your .env MyWork main app
`EMAIL_SERVICE_BASE_URL=http://localhost:5000`


#### Usage

```
use App\Services\EmailService;

public function __construct(EmailService $emailService)
{
     $this->emailService = $emailService;
 }

 $this->emailService->SendEmailToQueue($to, $subject, $body, $from);
```

Shell script coming soon!!!


Have fun using this :)😅
