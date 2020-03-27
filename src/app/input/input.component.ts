
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ])

  exampleForm = new FormGroup({
    emailFormControl: new FormControl(),
    passwordFormControl: new FormControl()
  });

  matcher = new MyErrorStateMatcher();

}
