import { Form } from "@/components/login/Form";
import { Info } from "@/components/login/Info";
import { LogoHeader } from "@/components/login/LogoHeader";
import { Redirect } from "@/components/login/Redirect";

export default function Home() {
  return (
    <div className="row g-0 login-section">
      <Redirect></Redirect>
      <div className="col-lg-6">
        <div className="card-body p-md-5 mx-md-4">
          <LogoHeader></LogoHeader>
          <Form></Form>
        </div>
      </div>
      <Info></Info>
    </div>
  );
}
