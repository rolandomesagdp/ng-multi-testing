import { ConfiguratorUser } from "./user";

export function configuratorUserInitializer(user: ConfiguratorUser) {
  return () => {
    user.entryRoute.captureEntryRoute();
  };
}