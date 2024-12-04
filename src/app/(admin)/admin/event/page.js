import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Image from "next/image"


 
  const events= [
    {
     thumbnail:"https://images.unsplash.com/photo-1613993096403-8df4466b21f0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "school event",
      description: "school event is chlid hooby",
      location: "karachi",
     date: new Date().toLocaleString(),
     
    },
    {
     thumbnail:"https://images.unsplash.com/photo-1504437484202-613bb51ce359?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJBQnklMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "birthday event",
      description: "birthday of babay girl",
      location: "karachi",
     date: new Date().toLocaleString(),
     
    },
    {
     thumbnail:"https://images.unsplash.com/photo-1585162697791-dc771c801b95?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "cyclying events ",
      description: "cycle is good excise and heathly ",
      location: "karachi",
     date: new Date().toLocaleString(),
     
    },
   
  ]
  

  export  default function Event() {
    return (
        <div>
            <div className="flex justify-between">
            <h1 className="font-bold  transition ease-in-out delay-150 hover:cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 ...">Events</h1>
            </div>
            
      <Table>
        <TableCaption>A list of your recent events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>thumbnail</TableHead>
            <TableHead className="w-[100px]">title</TableHead>
            <TableHead >description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead >date</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map(({thumbnail,title,description,location,date}) => (
              <TableRow key={title}>
                <TableCell className="text-right"><Image src={thumbnail} width={40} height={40} alt="image" className="rounded-md"></Image></TableCell>
              <TableCell className="font-medium">{title}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>{location}</TableCell>
              <TableCell>{date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
      </div>
    )
  }
  
  
  
  