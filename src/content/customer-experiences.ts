export type CustomerExperience = {
  id: string;
  name: string;
  appliance: string;
  summary: string;
  publicationApproved: boolean;
  approvalDate: string | null;
};

// Editorial records only. Only approved public fields may reach a client component.
// Approval covers both the name and this experience summary; no verbatim quotes.
// Publication consent for the five named customers was confirmed by the user on 2026-11-17.
export const customerExperiences: CustomerExperience[] = [
  {
    id: "experience-01",
    name: "Ahmed Baki",
    appliance: "Samsung çamaşır makinesi",
    summary:
      "Çamaşır makinesindeki sorunun hızlı çözülmesinden ve yapılan işlemden memnun kaldığını belirtti.",
    publicationApproved: true,
    approvalDate: "2026-11-17",
  },
  {
    id: "experience-02",
    name: "İkra Oku",
    appliance: "Vestel buzdolabı ve çamaşır makinesi",
    summary:
      "İki cihazı için yapılan işlemlerden memnun kaldığını ve sorunların hızlı çözüldüğünü paylaştı.",
    publicationApproved: true,
    approvalDate: "2026-11-17",
  },
  {
    id: "experience-03",
    name: "Merve İnce",
    appliance: "Arçelik çamaşır makinesi",
    summary:
      "Çamaşır makinesinin onarımıyla ilgili memnuniyetini ve sorunun hızlı giderildiğini iletti.",
    publicationApproved: true,
    approvalDate: "2026-11-17",
  },
  {
    id: "experience-04",
    name: "Hayrettin Basir",
    appliance: "Bosch buzdolabı",
    summary:
      "Buzdolabındaki sorunun çözümünden memnun kaldığını, işlemin hızlı sonuçlandığını belirtti.",
    publicationApproved: true,
    approvalDate: "2026-11-17",
  },
  {
    id: "experience-05",
    name: "Ahmed Fevzi Yüksel",
    appliance: "Beko çamaşır makinesi ve Siemens bulaşık makinesi",
    summary:
      "Çamaşır ve bulaşık makineleri için aldığı hizmetten memnun kaldığını ve arızaların hızlı giderildiğini belirtti.",
    publicationApproved: true,
    approvalDate: "2026-11-17",
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
