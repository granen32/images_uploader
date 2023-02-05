export interface CustomInputType {
  value: string;
  label: string;
  type: string | undefined;
  setVaule: React.Dispatch<React.SetStateAction<string>>;
}
