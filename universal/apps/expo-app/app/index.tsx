import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { VStack } from "@/components/ui/vstack";
const index = () => {
  return (
    <SafeAreaView className="md:flex flex-col items-center justify-center md:w-full h-full">
      <VStack className="p-2 md:max-w-[440px] w-full" space="xl">
        <Button
          onPress={() => {
            router.push("auth/splash-screen");
          }}
        >
          <ButtonText className='font-cursive'>SplashScreen</ButtonText>
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
    </SafeAreaView>
  );
};

export default index;
