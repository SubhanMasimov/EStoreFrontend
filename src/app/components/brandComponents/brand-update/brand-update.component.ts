import { CommandRepositoryService } from './../../../core/repositories/commandRepository.service';
import { BrandService } from './../../../services/brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Brand } from './../../../models/brand';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandModel: Brand
  brandUpdateForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private commandRepositoryService: CommandRepositoryService) { }

  ngOnInit(): void {
    if (this.activatedRoute.params) {
      this.activatedRoute.params.subscribe(params => {
        this.getBrandEntity(params["id"])
      })
    }
    this.createBrandUpdateForm()

  }

  createBrandUpdateForm(): void {

    this.brandUpdateForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      createDate: new FormControl(),
      active: new FormControl()
    })

    this.brandUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      createDate: [""],
      active: [""]
    })
  }

  update(): void {
    this.commandRepositoryService.update(this.brandUpdateForm, this.brandService, 'admin/brands')
  }

  getBrandEntity(id: number) {
    this.brandService.getById(id).subscribe(response => {
      this.brandModel = response.data

      this.brandUpdateForm.setValue({
        id: this.brandModel.id,
        name: this.brandModel.name,
        createDate: this.brandModel.createDate,
        active: this.brandModel.active
      })
    })
  }

}
