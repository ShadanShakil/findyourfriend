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


  const users = [
    {
      fullname: "Bilal Raza",
      email: "attari1235@gmail.com",
        location: "Karachi",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
      events: 5,
    },
    {
      fullname: "Ahmed Raza",
      email: "raza@gmail.com",
      location: "Karachi",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
      events: 5,
    },
    {
      fullname: "Asad Raza",
      email: "asad@gmail.com",
      location: "Karachi",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
      events: 5,
    },
  ];


    return (
      <div className="min-h-screen container mx-auto">
        <h1 className="font-bold text-3xl p-20 text-center">Users</h1>
        <Table>
  <TableCaption>A list of your recent users.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="text-left">Profile Image</TableHead>
      <TableHead className="w-[100px]">Fullname</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Location</TableHead>
      <TableHead className="text-left">Events</TableHead>

    </TableRow>
  </TableHeader>
  <TableBody> 
          {users.map((user) => (
            <TableRow key={user.fullname}>
              <TableCell className="text-right">
                <Image
                alt="profile pic"
                  src={user.profileImage}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell className="font-medium">{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
</Table>
      </div>
    );
  }
  