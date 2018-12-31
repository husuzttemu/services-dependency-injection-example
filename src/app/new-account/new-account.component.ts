import { Component, } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  // create an instance has to be injected. Type is not an optional
  constructor(private loggingService: LoggingService,
    private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);

     // console.log('A server status changed, new status: ' + accountStatus);

  }
}
