import "./vape";
import { system, world, ChatSendBeforeEvent, ItemStack } from "@minecraft/server";

function handleVapeCommand(event: ChatSendBeforeEvent) {
    system.run(() => {
        world
            .getDimension("overworld")
            .spawnItem(
                new ItemStack("bridge:vaperizor", 1), event.sender.location
            );
    });
    event.cancel = true;
}

world.beforeEvents.chatSend.subscribe((event: ChatSendBeforeEvent) => {
    if (event.message === ".vape") {
        handleVapeCommand(event);
    }
});