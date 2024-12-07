"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { AddCategory } from "../../../../components/AddCategoire/AddCategoire"




const categoires = [
  {
    title: "Birhtday",
    thumbnail: "https://images.unsplash.com/photo-1553135422-400ee5852b27?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1613993096403-8df4466b21f0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "birthday is chlid dream",
  },
  {
    title: "Sports",
    thumbnail: "https://images.unsplash.com/photo-1616500156885-e51d834cab8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1613993096403-8df4466b21f0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "ssport is good activity",
  },
  {
    title: "Indoor sport",
    thumbnail: "https://images.unsplash.com/photo-1721490571166-356691cfd62d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1613993096403-8df4466b21f0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "chase is smart game",
  },

]


export default function Categories() {
  return (
    < div className="max-h-screen container mx-auto">
    <div className="flex justify-between ">
      <h1 className="font-bold m-5 transition ease-in-out delay-100 hover:cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 ...">Category</h1>
      <AddCategory/>
      </div>
    <Table>
      <TableCaption>A list of your Categories </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>thumbnail</TableHead>
          <TableHead className="w-[100px]">title</TableHead>
          <TableHead >description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categoires.map(({ thumbnail, title, description }) => (
          <TableRow key={title}>
            <TableCell className="text-right"><Image src={thumbnail} width={50} height={50} alt="image" className="rounded-md"></Image></TableCell>
            <TableCell className="font-medium">{title}</TableCell>
            <TableCell>{description}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
    </div>
  )
}


