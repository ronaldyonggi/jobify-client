import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="firstName" placeHolder="Enter first name" labelText="First Name" />
        <FormRow type="text" name="lastName" placeHolder="Enter last name" labelText="Last Name" />
        <FormRow type="text" name="location" placeHolder="Enter location" labelText="Location" />
        <FormRow type="email" name="email" placeHolder="Enter email address" labelText="Email" />
        <FormRow type="password" name="password" placeHolder="Enter password" labelText="Password" />
        <button type="submit" className="btn btn-block">submit</button>
      </form>
    </Wrapper>
  )
}
export default Register