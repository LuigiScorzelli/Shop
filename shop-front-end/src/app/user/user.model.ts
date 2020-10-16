export class User {
  // id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  created_at: string;
  updated_at: string;

  constructor(id: string, name: string, lastname: string, email: string, phone: string, password: string, passwordConfirm: string, address: string, address2: string, city: string, state: string, created_at: string, updated_at: string) {
    // this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    this.address = address;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}