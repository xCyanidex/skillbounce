
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CounterOfferDialog = ({defaultPoints}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create Offer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create an offer</DialogTitle>
            <DialogDescription>
              Enter the points to offer to create a counter offer.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Points 
              </Label>
              <Input
                id="points"
                name="counterPointsOffered"
                defaultValue={defaultPoints}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Offer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CounterOfferDialog