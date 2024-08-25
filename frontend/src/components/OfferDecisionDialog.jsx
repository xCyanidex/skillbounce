import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const OfferDecisionDialog = () => {
  const [decisionState, setDecisionState] = useState("");

  const handleDecision = (decision) => {
    setDecisionState(decision);
  };

  return (
    <>
      <div className="flex space-x-2">
        <Button variant="outline" onClick={() => handleDecision("decline")}>
          Decline
        </Button>
        <Button onClick={() => handleDecision("accept")}>Accept</Button>
      </div>

      <Dialog open={!!decisionState} onOpenChange={() => setDecisionState("")}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Offer Update</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {decisionState === "decline" ? (
              <>Are you sure you want to decline this offer?</>
            ) : (
              <>Are you sure you want to accept this offer?</>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">
              {decisionState === "decline" ? "Decline" : "Accept"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OfferDecisionDialog;
