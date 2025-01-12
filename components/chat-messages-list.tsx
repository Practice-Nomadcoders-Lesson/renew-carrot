"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createClient, RealtimeChannel } from "@supabase/supabase-js";

import { cn, formatToTimeAgo } from "@/lib/utils";

import { InitialChatMessages } from "@/app/chats/[id]/page";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const SUPABASE_PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!;

interface ChatMessageListProps {
  initialMessages: InitialChatMessages;
  userId: number;
  chatRoomId: string;
  username: string;
  avatar: string;
}

export default function ChatMessagesList({
  initialMessages,
  userId,
  chatRoomId,
  username,
  avatar,
}: ChatMessageListProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");
  const channel = useRef<RealtimeChannel>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setMessage(value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessages((prevMsgs) => [
      ...prevMsgs,
      {
        id: Date.now(),
        payload: message,
        created_at: new Date(),
        userId,
        user: {
          username: "",
          avatar: "",
        },
      },
    ]);

    setMessage("");

    channel.current?.send({
      type: "broadcast",
      event: "message",
      payload: {
        id: Date.now(),
        payload: message,
        created_at: new Date(),
        userId,
        user: {
          username,
          avatar,
        },
      },
    });
  };

  useEffect(() => {
    const client = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
    channel.current = client.channel(`room-${chatRoomId}`);
    channel.current
      .on("broadcast", { event: "message" }, (payload) => {
        setMessages((prevMsgs) => [...prevMsgs, payload.payload]);
      })
      .subscribe();
    return () => {
      channel.current?.unsubscribe();
    };
  }, [chatRoomId]);

  return (
    <div className="flex min-h-screen flex-col justify-end gap-5 p-5">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex items-start gap-2",
            message.userId === userId && "justify-end",
          )}
        >
          {message.userId === userId ? null : (
            <Image
              src={message.user.avatar!}
              alt={message.user.username}
              width={50}
              height={50}
              className="size-8 rounded-full"
            />
          )}
          <div
            className={cn(
              "flex flex-col gap-1",
              message.userId === userId && "items-end",
            )}
          >
            <span
              className={cn(
                "rounded-md p-2.5",
                message.userId === userId ? "bg-neutral-500" : "bg-orange-500",
              )}
            >
              {message.payload}
            </span>
            <span className="text-xs">
              {formatToTimeAgo(message.created_at.toString())}
            </span>
          </div>
        </div>
      ))}
      <form className="relative flex" onSubmit={onSubmit}>
        <input
          required
          onChange={onChange}
          value={message}
          className={cn(
            "h-10 w-full rounded-full border-none bg-transparent px-5 ring-2 ring-neutral-200 transition",
            "focus:outline-none focus:ring-4 focus:ring-neutral-50",
            "placeholder:text-neutral-400",
          )}
          type="text"
          placeholder="Write a message..."
        />
        <button className="absolute right-0">
          <ArrowUpCircleIcon className="size-10 text-orange-500 transition-colors hover:text-orange-300" />
        </button>
      </form>
    </div>
  );
}
