import { ConfiguratorUser } from "./user";

export function userInitializer(user: ConfiguratorUser) {
    return () => {
      user.entryRoute.captureEntryRoute();
    };
  }