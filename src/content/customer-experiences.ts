export type CustomerExperience = {
  id: string;
  name: string;
  appliance: string;
  summary: string;
  publicationApproved: boolean;
  approvalDate: string | null;
};

// Editorial records only. These must never be passed to a client component.
// Approval covers both the name and this experience summary; no verbatim quotes.
export const customerExperiences: CustomerExperience[] = [
  {
    id: "experience-01",
    name: "Ahmed Baki",
    appliance: "Samsung çamaşır makinesi",
    summary:
      "Çamaşır makinesindeki sorunun hızlı çözülmesinden ve yapılan işlemden memnun kaldığını belirtti.",
    publicationApproved: false,
    approvalDate: null,
  },
  {
    id: "experience-02",
    name: "İkra Oku",
    appliance: "Vestel buzdolabı ve çamaşır makinesi",
    summary:
      "İki cihazı için yapılan işlemlerden memnun kaldığını ve sorunların hızlı çözüldüğünü paylaştı.",
    publicationApproved: false,
    approvalDate: null,
  },
  {
    id: "experience-03",
    name: "Merve İnce",
    appliance: "Arçelik çamaşır makinesi",
    summary:
      "Çamaşır makinesinin onarımıyla ilgili memnuniyetini ve sorunun hızlı giderildiğini iletti.",
    publicationApproved: false,
    approvalDate: null,
  },
  {
    id: "experience-04",
    name: "Hayrettin Basir",
    appliance: "Bosch buzdolabı",
    summary:
      "Buzdolabındaki sorunun çözümünden memnun kaldığını, işlemin hızlı sonuçlandığını belirtti.",
    publicationApproved: false,
    approvalDate: null,
  },
  {
    id: "experience-05",
    name: "Ahmed Fevzi Yüksel",
    appliance: "",
    summary:
      "Yapılan işlemden memnun kaldığını ve sorunun hızlı çözüldüğünü paylaştı.",
    publicationApproved: false,
    approvalDate: null,
  },
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `experience-${String(i + 6).padStart(2, "0")}`,
    name: "",
    appliance: "",
    summary: "",
    publicationApproved: false,
    approvalDate: null,
  })),
];

export function publishableExperiences(records: CustomerExperience[]) {
  return records.filter(
    (record) =>
      record.publicationApproved &&
      /^\d{4}-\d{2}-\d{2}$/.test(record.approvalDate ?? "") &&
      record.name.trim() &&
      record.appliance.trim() &&
      record.summary.trim(),
  );
}
