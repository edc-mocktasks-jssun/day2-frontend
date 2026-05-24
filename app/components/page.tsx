"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogTrigger
} from "@/components/ui/dialog";

export default function ComponentsPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-400">
        LaunchPad Components
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

        {/* CARD with BADGE */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Startup Idea</CardTitle>
              <Badge className="bg-indigo-500">New</Badge>
            </div>
            <CardDescription className="text-gray-400">
              AI-powered study planner for college students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm">
              Submitted by Shriti Gupta · 2 hours ago
            </p>
          </CardContent>
        </Card>

        {/* INPUT */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Join Waitlist</CardTitle>
            <CardDescription className="text-gray-400">
              Be the first to know when we launch.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              Join
            </Button>
          </CardContent>
        </Card>

        {/* BUTTON variants */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Actions</CardTitle>
            <CardDescription className="text-gray-400">
              Different button types for different actions
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 flex-wrap">
            <Button className="bg-indigo-500 hover:bg-indigo-600">Apply Now</Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              Learn More
            </Button>
            <Button variant="destructive">Delete</Button>
          </CardContent>
        </Card>

        {/* DIALOG */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Submit Idea</CardTitle>
            <CardDescription className="text-gray-400">
              Share your startup idea with the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-indigo-500 hover:bg-indigo-600">
                  Submit Your Idea
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle>Submit a Startup Idea</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Fill in the details below. Our team reviews all submissions within 48 hours.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 mt-2">
                  <Input placeholder="Idea title" className="bg-gray-700 border-gray-600 text-white" />
                  <Input placeholder="One-line description" className="bg-gray-700 border-gray-600 text-white" />
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600">Submit</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}