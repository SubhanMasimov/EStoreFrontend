import { BrandService } from './../../../services/brand.service';
import { CommandRepositoryService } from '../../../core/repositories/commandRepository.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private commandRepositoryService: CommandRepositoryService,
    private brandService: BrandService) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group(
      { name: ["", Validators.required] }
    )
  }


  add() {
    this.commandRepositoryService.add(this.brandAddForm, this.brandService, 'admins/brands')
  }

}
