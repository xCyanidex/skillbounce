
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CounterOfferDialog from "./CounterOfferDialog";
import OfferDecisionDialog from "./OfferDecisionDialog";

const ServiceChatBox = () => {


      const [messages, setMessages] = useState([
        {
          id: 1,
          sender: "provider",
          text: "Hi there! How can I assist you with your web development needs today?",
          timestamp: "2:30 PM",
        },
        {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },
        {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },
        {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },
        {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },
        {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },
        {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },

        {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },    {
          id: 2,
          sender: "user",
          text: "Hi, I'm interested in your web development services. Can you tell me more about your experience and process?",
          timestamp: "2:31 PM",
        },

      ]);

       const [newMessage, setNewMessage] = useState("");
        const [pointsToOffer, setPointsToOffer] = useState(0);

       const handleSendMessage = () => {
         if (newMessage.trim() !== "") {
           setMessages([
             ...messages,
             {
               id: messages.length + 1,
               sender: "user",
               text: newMessage,
               timestamp: new Date().toLocaleTimeString([], {
                 hour: "2-digit",
                 minute: "2-digit",
               }),
             },
           ]);
           setNewMessage("");
         }
       };

         const handleOfferPoints = () => {
           if (pointsToOffer > 0) {
             setMessages([
               ...messages,
               {
                 id: messages.length + 1,
                 sender: "user",
                 text: `I would like to offer ${pointsToOffer} points for your services.`,
                 timestamp: new Date().toLocaleTimeString([], {
                   hour: "2-digit",
                   minute: "2-digit",
                 }),
               },
             ]);
             setPointsToOffer(0);
           }
         };

  return (
    <section className="container px-4 md:px-6 py-12 md:py-16 lg:py-10">
      <div className="bg-background rounded-lg shadow-lg p-6">
        <div className="flex flex-col h-[400px] overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start mb-4 ${
                message.sender === "provider" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Avatar className="w-8 h-8 mr-2">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>
                  {message.sender === "provider" ? "P" : "U"}
                </AvatarFallback>
              </Avatar>
              <div
                className={`bg-muted rounded-lg p-2 max-w-[70%] ${
                  message.sender === "provider"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <div className="text-xs text-muted-foreground mt-1">
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Points Offered</div>
              <div className="text-2xl font-bold">{pointsToOffer}</div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
        <OfferDecisionDialog/>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <div className="flex flex-col space-y-4">
            <CounterOfferDialog />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceChatBox;