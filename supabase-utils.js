import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = ' enter your project url here '
const supabaseKey = ' enter your project key here '
export const supabase = createClient(supabaseUrl, supabaseKey)
export const user = await supabase.auth.getUser()

// verifies loggedin user with session
export function checkUser() {
    if (user.error != null ) {
        window.location.href = 'login.html'
    }
}

// Function to sign up a new user with email and password
export async function signUpWithEmail(email, password) {
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up:', user);
    }
  }
  
// Function to sign in an existing user with email and password
export async function signInWithEmail(email, password) {
    const { data, error }  = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      console.log('User signed in:', data);
      window.location.href = 'listing.html'
    }
}
  
// Function to sign out the current user
export async function signOut() {
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      alert('Error signing out:', error.message);
    } else {
      window.location.href = 'login.html'
    }
}
