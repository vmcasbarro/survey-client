curl "http://localhost:4741/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
