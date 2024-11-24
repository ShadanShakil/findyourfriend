import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AddCategory } from "@/components/AddCategory/AddCategory";

export default function Users() {


  const Categories = [
    {
      title: "Sports",
      description: "All your sports related events",
      thumbnail:"https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZyUyMG1hcmF0aG9ufGVufDB8fDB8fHww",
    },
    {
      title: "Birthday party",
      description: "All your bithday events",
      thumbnail:"https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Wedding",
      description: "All your wedding invitations",
      thumbnail:"https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    },
  ];

    return (
      <div className="min-h-screen container mx-auto">
        <h1 className="font-bold text-3xl p-20 text-center">Catagories</h1>
        <div className="flex justify-end">
          <AddCategory/>
        </div>
        <Table>
  <TableCaption>A list of your categories.</TableCaption>
  <TableHeader>
          <TableRow>
            <TableHead  className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>

          </TableRow>
        </TableHeader>
  <TableBody>
          {Categories.map((data) => (
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
              <TableCell className="font-medium">{data.title}</TableCell>
              <TableCell>{data.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
</Table>
      </div>
    );
  }
  