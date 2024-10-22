import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public perfil! : any;

  constructor(private git : GithubService)
  {}

  ngOnInit()
  {
    this.git.obtener_perfil().subscribe(
      {
        next: (p) => { 
          this.perfil = p;
          console.log(this.perfil);
        },
        error: (e) => { console.log(e) }
      });
  }
}
