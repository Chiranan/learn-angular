import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorymenu',
  templateUrl: './categorymenu.component.html',
  styleUrls: ['./categorymenu.component.css'],
})
export class CategorymenuComponent implements OnInit {
  mobiles: string[];
  constructor() {
    this.mobiles = ['Moto', 'Vivo', 'iPhon', 'Samsung'];
  }

  allmyclass = {}; // กำหนด object ของชื่อ css class
  clickCount = 0;

  // เมื่อคลิกที่ปุ่ม ให้มาทำคำสั่งนี้
  setAllmyClass() {
    // นับค่าจำนวนคลิก
    if (this.clickCount == 3) {
      // ถ้าคลิกครบ 3 ครั้งให้รีเซ็ตค่า
      this.clickCount = 0;
    }
    this.clickCount++; // บวกค่า
    // เพิ่มหรือลบ css class แต่ละตัวตามเงื่อนไข
    this.allmyclass = {
      'btn-success': this.clickCount == 1,
      'btn-info': this.clickCount == 2,
      'btn-danger': this.clickCount == 3,
    };
  }
  ngOnInit(): void {}
}
