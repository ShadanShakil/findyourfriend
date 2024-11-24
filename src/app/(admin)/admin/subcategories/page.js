import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function Users() {
  const SubCategories = [
    {
      title: "cricket",
      category: "Sports",
      description: "All your sports related events",
      thumbnail:
        "https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZyUyMG1hcmF0aG9ufGVufDB8fDB8fHww",
    },
    {
      title: "football",
      category: "Sports",
      description: "All your sports related events",
      thumbnail:
        "https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZyUyMG1hcmF0aG9ufGVufDB8fDB8fHww",
    },
    {
      title: "tennis",
      category: "Sports",
      description: "All your sports related events",
      thumbnail:
        "https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZyUyMG1hcmF0aG9ufGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="font-bold text-3xl p-20 text-center">SubCatagories</h1>
      <div className="flex justify-end">
        <AddSubCategory />
      </div>
      <Table>
        <TableCaption>A list of your Subcategories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SubCategories.map((data) => (
            <TableRow key={data.title}>
              <TableCell className="text-right">
                <Image
                  alt="profile pic"
                  src={data.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell>{data.category}</TableCell>
              <TableCell className="font-medium">{data.title}</TableCell>
              <TableCell>{data.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
