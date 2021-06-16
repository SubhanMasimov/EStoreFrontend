import { CommandRepositoryService } from './../../../core/repositories/commandRepository.service';
import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BuiltinVar } from '@angular/compiler';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = []

  constructor(private brandService: BrandService,
    private commandRepositoryService: CommandRepositoryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.brandService.getAll().subscribe(successResponse => {
      this.brands = successResponse.data
    })
  }

  delete(brand: Brand) {
    this.commandRepositoryService.delete(brand, this.brandService)
    this.brands = this.brands.filter(b=>b.id !== brand.id)
  }
}
