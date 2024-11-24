import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";

export default function Users() {


  const events = [
    {
      title: "cycling marathon",
      description: "marathon of a cycle",
      location: "Karachi",
      thumbnail:"https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZyUyMG1hcmF0aG9ufGVufDB8fDB8fHww",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "birthday party",
      description: "birthday party of a friend",
      location: "Karachi",
      thumbnail:"https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "wedding",
      description: "wedding of my brother",
      location: "Karachi",
      thumbnail:"https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      date: new Date().toLocaleDateString(),
    },
  ];


    return (
      <div className="min-h-screen container mx-auto">
        <h1 className="font-bold text-3xl p-20 text-center">Events</h1>
        <Table>
  <TableCaption>A list of your recent events.</TableCaption>
  <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-left">Date</TableHead>
          </TableRow>
        </TableHeader>
  <TableBody> 
          {events.map((data) => (
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
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
</Table>
      </div>
    );
  }
  