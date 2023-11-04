import { CardProps } from "@/components/SearchCard";

export type Response = {
  name: string;
  image: { uri: string };
  experts: Array<{
    firstName: string;
    lastName: string;
    company: string;
  }>;
  categories: Array<{ name: string }>;
};

export const mapToCardProps = (item: Response): CardProps => {
  const {
    name,
    image: { uri },
    experts,
    categories,
  } = item;

  const category = categories
    .map((item: { name: string }) => item.name)
    .join(", ")
    .toUpperCase();

  let author = "";
  let company = "";
  for (let expert of experts) {
    author += `${expert.firstName} ${expert.lastName}, `;
    if (expert.company.length) {
      company += `${expert.company}, `;
    }
  }
  return {
    name,
    uri,
    author,
    company,
    category,
  };
};
