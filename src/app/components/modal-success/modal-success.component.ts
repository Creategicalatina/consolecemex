import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {

  @Input() title: '';
  @Input() message: '';
  @Input() alertSuccess: true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
