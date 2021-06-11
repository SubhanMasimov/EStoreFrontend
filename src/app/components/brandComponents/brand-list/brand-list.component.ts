import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = []

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.brandService.getAll().subscribe(successResponse => {
      this.brands = successResponse.data
    })
  }
}
