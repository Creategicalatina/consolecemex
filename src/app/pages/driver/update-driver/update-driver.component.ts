import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  updateDriver() {
    console.log('actualizar datos del conductor...');
    document.getElementById('modal-1').setAttribute('open', 'true');
  }

  closeModal( event ) {
    console.log('cerrar modal... ', event)
    this.router.navigateByUrl('/dashboard/driver');
  }

}
