import { Messages } from 'src/app/constants/messages';
import { ToastrService } from 'ngx-toastr';

export class GlobalErrorHandler {

    constructor(private toastrService: ToastrService) { }

    handle(errorResponse: any) {
        if (errorResponse.error.Errors) {
            for (let index = 0; index < errorResponse.error.Errors.length; index++) {
                this.toastrService.warning(errorResponse.error.Errors[index].ErrorMessage)
            }
        }
        else if (errorResponse.error.message) {
            this.toastrService.warning(errorResponse.error.message)
        }
        else {
            this.toastrService.error(Messages.systemError)
        }
    }

}