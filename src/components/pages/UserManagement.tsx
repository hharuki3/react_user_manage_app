import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          userName="いくら"
          fullName="いくら本名"
          imageUrl="https://plus.unsplash.com/premium_photo-1686090449200-57266c6623a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </WrapItem>
    </Wrap>
  );
});
