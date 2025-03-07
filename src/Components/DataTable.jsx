import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

const DataTable = () => {
  const tableHead = ["Title", "Banner", "Date", "Action"];
  const tableBody = [
    {
      title: "Banner1",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner2",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner1",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner2",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner1",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner2",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner1",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner2",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner1",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner2",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner1",
      banner: "promotion1",
      date: "22/2/22",
    },
    {
      title: "Banner2",
      banner: "promotion1",
      date: "22/2/22",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 justify-center items-center bg-gray-300">
        {tableHead.map((item, index) => (
          <div
            key={index}
            className="col-span-1 flex justify-center items-center py-3 font-popins font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="overflow-y-scroll scrollbar-hide h-[400px]">
        {tableBody.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 justify-center items-center"
          >
            <div className="col-span-1 flex justify-center items-center py-3">
              {item.title}
            </div>
            <div className="col-span-1 flex justify-center items-center py-3">
              {item.banner}
            </div>
            <div className="col-span-1 flex justify-center items-center py-3">
              {item.date}
            </div>
            <div className="col-span-1 flex justify-center gap-x-2 items-center py-3">
              <Dialog>
                <DialogTrigger>
                  <Button
                    className={"cursor-pointer bg-red-500 hover:bg-red-800"}
                  >
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Alert</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <h5>Are you sure?</h5>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Yes</Button>
                    <DialogClose asChild>
                      <Button type="button">
                        No
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button className={"cursor-pointer"}>Edit</Button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default DataTable;
