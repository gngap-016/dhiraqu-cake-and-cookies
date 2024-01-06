import { menus } from "@/utils/menu";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("categories");

  const newMenu = [];
  try {
    menus?.map(item => {
      item.category == cat ? newMenu.push(item) : !cat | cat == "all" && newMenu.push(item)
    })

    return new NextResponse(
      JSON.stringify({category: cat, menus: newMenu}, {status: 200})
    )
  } catch (error) {
    return new NextResponse(
      JSON.stringify({message: "Something went wrong!"}, {status: 500})
    )
  }
}