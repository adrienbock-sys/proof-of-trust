import Buffer "mo:base/Buffer";
import Int "mo:base/Int";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Time "mo:base/Time";

actor ReviewPlatform {
  type Review = {
    id: Nat;
    author: Principal;
    title: Text;
    rating: Nat;
    content: Text;
    timestamp: Int;
  };

  let reviews = Buffer.Buffer<Review>(0);
  var nextId: Nat = 0;

  public shared(msg) func submitReview(title: Text, rating: Nat, content: Text): async Nat {
    assert(rating >= 1 and rating <= 5);
    let review: Review = {
      id = nextId;
      author = msg.caller;
      title = title;
      rating = rating;
      content = content;
      timestamp = Time.now();
    };
    reviews.add(review);
    nextId += 1;
    nextId - 1
  };

  public query func getAllReviews(): async [Review] {
    Buffer.toArray(reviews)
  };

  public query func getReviewsByRating(r: Nat): async [Review] {
    let filtered = Buffer.Buffer<Review>(0);
    for (review in Buffer.toIter(reviews)) {
      if (review.rating == r) {
        filtered.add(review);
      };
    };
    Buffer.toArray(filtered)
  };

  public query func getReviewCount(): async Nat {
    Buffer.size(reviews)
  };
}
