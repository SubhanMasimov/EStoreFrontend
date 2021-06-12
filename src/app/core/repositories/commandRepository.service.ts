import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Messages } from 'src/app/constants/messages';
import { GlobalErrorHandler } from '../errorHandler/globalErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class CommandRepositoryService {

  constructor(private toastrService: ToastrService,
    private router: Router) { }

  add(formGroup: FormGroup, service: any, navigateUrl: string): void {
    if (formGroup.valid) {
      let product = Object.assign({}, formGroup.value)
      service.add(product).subscribe(() => {
        this.toastrService.success(Messages.added)
        this.router.navigate([navigateUrl])
      },
        (errorResponse: any) => {
          new GlobalErrorHandler(this.toastrService).handle(errorResponse)
        })
    }
    else {
      this.toastrService.warning(Messages.fillAreas)
    }
  }
}
