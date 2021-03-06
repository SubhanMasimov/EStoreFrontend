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
      let entityModel = Object.assign({}, formGroup.value)
      service.add(entityModel).subscribe(() => {
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

  update(formGroup: FormGroup, service: any, navigateUrl: string): void {
    if (formGroup.valid) {
      let entityModel = Object.assign({}, formGroup.value)
      service.update(entityModel).subscribe(() => {
        this.toastrService.success(Messages.updated)
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

  delete(entity: any, service: any): void {
    if (confirm(Messages.areYouSure)) {
      service.delete(entity).subscribe(() => {
        this.toastrService.success(Messages.deleted)
      })
    }

  }

}
