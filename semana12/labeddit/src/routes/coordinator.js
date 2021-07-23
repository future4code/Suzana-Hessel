export const goToHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToFeed = (history) => {
  history.push("/login/feed");
};

export const goToSignup = (history) => {
  history.push("/login/signup/");
}

export const goToSignupFeed = (history) => {
  history.push("/login/signup/feed");
};

export const goToPost = (history) => {
history.push("/login/feed/post/:id")
 }
