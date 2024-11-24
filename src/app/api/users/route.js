import { connectDB } from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/Users";

export async function GET(request) {
    await connectDB();
    const users = await UserModel.find();
    return Response.json({
      msg: "Users Fetched Successfully",
      users,
    }, {status: 200 });
}
  
export async function POST(request) {
    // Connect to the database
    await connectDB();

    // Parse the incoming request body
    const obj = await request.json();

    // Create a new user using the UserModal
    let newUser = new UserModel(obj);

    // Save the new user to the database
    await newUser.save();

    // Return the response
    return Response.json({
        msg: "User created successfully",
        user: newUser
    }, { status: 201 }); // Fixed typo: 'ststus' -> 'status'
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 