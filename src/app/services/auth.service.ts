import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
const STORAGE_KEY = "current-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth,
    private router: Router,
    private firestore: Firestore) { }


  log_in(input_mail: string, input_pass: string)
  {
    //LOGIN FIREBASE
    signInWithEmailAndPassword(this.auth, input_mail, input_pass).then((res) => {

      if(res.user.email !== null) 
      {

        //CAPTURAR EL LOG DEL USUARIO
        let col = collection(this.firestore, 'logs');
        addDoc(col, {fecha: new Date(), user: res.user.email});

        //GUARDO USUARIO EN LOCAL STORAGE PARA EVITAR EL DELAY DE FIREBASE
        localStorage.setItem(STORAGE_KEY, res.user.email);
        
        //ALERTA + REDIRECT + RELOAD 
        Swal.fire(
          {
            title: '¡Bienvenido ' + res.user.email + '!',
            text: 'Ha ingresado correctamente.',
            icon: 'success',
            iconColor: '#FF00C1',
            confirmButtonText: "<p style='color:#000000'> Ok </p>",
            confirmButtonColor: '#00FFEB',
            background: '#FFFFFF'
          }).then(() => {
              this.router.navigate(['home'])}).then(()=> 
                {window.location.reload()});
      }
    }).catch((e) => { 
      //TOMA EL MENSAJE DE ERROR
      let mensaje = ''; 
        switch(e.code)
        {
          case "auth/invalid-credential":
            mensaje = "Usuario o contraseña incorrecta.";
          break;
          case "auth/invalid-email":
            mensaje = "Correo electrónico inválido.";
          break;
          default:
            mensaje = e.code;
          break;
        }
        Swal.fire(
          {
            title: 'Error',
            text: mensaje,
            icon: 'error',
            iconColor: '#FF00C1',
            confirmButtonText: "<p style='color:#000000'> Ok </p>",
            confirmButtonColor: '#00FFEB',
            background: '#FFFFFF'
          });    
    });
  }

  log_out() : any
  {
    signOut(this.auth).then((res) => {
      localStorage.removeItem(STORAGE_KEY);
      Swal.fire(
        {
          title: 'Salir',
          iconColor: '#FF00C1',
          text: 'Ha salido correctamente.',
          icon: 'success',
          confirmButtonText: 'Ok'
        }
      ).then(() => {this.router.navigate(['home'])}).then(()=> 
        {window.location.reload()});
    }).catch((e) => {
      let mensaje = ''; 
        switch(e.code)
        {
          default:
            mensaje = e.code;
          break;
        }
        Swal.fire(
          {
            title: 'Error',
            text: mensaje,
            icon: 'error',
            confirmButtonText: 'Ok'
          }); 
    });
  }

  getUser() {
    const userData = localStorage.getItem(STORAGE_KEY);
    return userData ? userData : null;
  }

  is_admin()
  {
    const userData = localStorage.getItem(STORAGE_KEY);
    if(userData == 'admin@gmail.com')
    {
      return userData;
    }
    else
    {
      return null;
    }
  }
}
