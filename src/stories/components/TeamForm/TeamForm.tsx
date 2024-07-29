import "./TeamForm.css"

type TeamFormData = {
    organizationName: string,
    websiteUrl: string,
    signUpReason: string,
    preferredIntegration: string,
}
export interface TeamFormProps {
    onSubmit: () => {}
}

export const TeamForm = ({
  onSubmit,
}: TeamFormProps) => {
  return (<div></div>);
};
