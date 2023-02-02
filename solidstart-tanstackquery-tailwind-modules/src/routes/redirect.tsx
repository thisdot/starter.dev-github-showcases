import { createQuery } from "@tanstack/solid-query";
import { Match, Switch, createEffect, createResource } from "solid-js";
import { useNavigate } from "solid-start";
import { useAuth } from "~/auth";
import greetingFetcher from "~/components/FetchExample/greetingFetcher";
import { API_URL } from "~/utils/constants";

const fetchToken = async () => {
  return await fetch(`${API_URL}/auth/token`, {
    credentials: 'include',
  }).then((resp) => resp.json()).then((data) => data.access_token);
  
}

export default function Redirect () {
  const route = useNavigate();
  const { setAuth } = useAuth();

  const query = createQuery(() => [], () => greetingFetcher('herrlo'));

  // const [token] = createResource(fetchToken);

  // const storage = sessionStorage;

   createEffect(() => {

    // console.log(token());


    
    console.log('here');
    
    // if (query.isSuccess && !query.isLoading) {
    //   console.log('==================================== ');
    //   console.log(query.data);
    //   console.log('====================================');
    //   // setAuth({ token: token() });
    //   // storage.setItem('token', token());
    //   route(sessionStorage.getItem('auth_return_path') || '/');
    // }
  });

  return (
     <Switch>
        <Match when={query.isLoading}>
          <div class="grow animate-pulse rounded-md bg-gray-200 text-left">
            Loading...
          </div>
        </Match>
        <Match when={query.isError}>
          <div class="grow rounded border border-solid border-red-300 bg-red-100 p-4 text-center text-red-500">
            Error:{' '}
            <span class="text-red-500">
              There was an error loading your greeting :(
            </span>
          </div>
        </Match>
        <Match when={query.isSuccess}>
          <div class="flex w-full justify-center text-xl">
            <div class="mr-4">Message:</div>
          </div>
        </Match>
      </Switch>
  );
}