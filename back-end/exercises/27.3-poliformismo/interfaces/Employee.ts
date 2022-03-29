export default interface Employee {
  enrollment: string;
  salary: number;
  admissionDate: Date;

  generateEnrollment(): string;
}
