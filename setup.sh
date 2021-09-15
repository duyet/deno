if ! command -v deno &> /dev/null
then
    echo "Installing Deno ..."
    curl -fsSL https://deno.land/x/install/install.sh | sh
fi

echo Done