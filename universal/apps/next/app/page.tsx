"use client";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  return (
    <VStack className="m-2" space="xl">
      <Button
        onPress={() => {
          router.push("auth/splash-screen");
        }}
      >
        <ButtonText className="font-cursive">SplashScreen</ButtonText>
      </Button>
      <Button
        className="w-full"
        onPress={() => {
          router.push("auth/signin");
        }}
      >
        <ButtonText className='font-cursive'>Sign in</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("auth/signup");
        }}
      >
        <ButtonText className='font-cursive'>Sign up</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("auth/forgot-password");
        }}
      >
        <ButtonText className='font-cursive'>Forgot password</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("auth/create-password");
        }}
      >
        <ButtonText className='font-cursive'>Create password</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("news-feed/news-and-feed");
        }}
      >
        <ButtonText className='font-cursive'>News feed</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("dashboard/dashboard-layout");
        }}
      >
        <ButtonText className='font-cursive'>Dashboard</ButtonText>
      </Button>
      <Button
        onPress={() => {
          router.push("profile/profile");
        }}
      >
        <ButtonText className='font-cursive'>Profile</ButtonText>
      </Button>
    </VStack>
   
    

  );
};

export default Page;
