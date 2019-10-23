export class NewFormError {
    constructor(errorName, errorLink, form) {
      this.errorName = errorName;                                       // сообщения валидации 
      this.errorLink = errorLink;
      this.form = form;
      this.formNameError = this.formNameError.bind(this);
      this.formLinkError = this.formLinkError.bind(this);
    }
        formNameError(nameNewForm) {
          this.form.addEventListener('input', () => {
          if (nameNewForm.value.length !== 0 && nameNewForm.value.length < 2|| nameNewForm.value.length > 30) {
            this.errorName.textContent = "Должно быть от 2 до 30 символов";
          }
  
          else {this.errorName.textContent = "";}
  
          if (nameNewForm.value.length === 0) {
            this.errorName.textContent = "Это обязательное поле";
          }
  
        });
      }
        formLinkError(linkNewForm) {
          this.form.addEventListener('input', () => {
          if (!linkNewForm.checkValidity()) {
            this.errorLink.textContent = "Здесь должна быть ссылка";
          }
    
          else { this.errorLink.textContent = "";}
    
          if (linkNewForm.value.length === 0) {
            this.errorLink.textContent = "Это обязательное поле";
          }
        });
        }
        formJobError(nameNewForm) {
          this.form.addEventListener('input', () => {
          if (nameNewForm.value.length !== 0 && nameNewForm.value.length < 2|| nameNewForm.value.length > 30) {
            this.errorLink.textContent = "Должно быть от 2 до 30 символов";
          }
  
          else {this.errorLink.textContent = "";}
  
          if (nameNewForm.value.length === 0) {
            this.errorLink.textContent = "Это обязательное поле";
          }
  
        });
      }

      formAvatarError(linkAvatarForm) {
        this.form.addEventListener('input', () => {
          
          if (!linkAvatarForm.checkValidity()) {
          this.errorLink.textContent = "Здесь должна быть ссылка";
        }
  
        else { this.errorLink.textContent = "";}
  
        if (linkAvatarForm.value.length === 0) {
          this.errorLink.textContent = "Это обязательное поле";
        }
        
      });
      }
  } 
 